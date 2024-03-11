import React, { useEffect, useState } from 'react';
import { LayoutAnimation, StyleSheet } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import SelectDropdown from 'react-native-select-dropdown';
import { DefaultTheme } from 'styled-components';
import IconButton from '../IconButton'

import useUi from '../../contexts/ui/useUi';

import {
  Container,
  TextInput,
  Label,
  ErrorLabel,
  BackgroundContainer,
  DropDownLabel,
} from './styles';
import IconButton from '../IconButton';

interface PropTypes {
  onValueChanged?: (value: string) => void;
  value: string;
  label: string;
  error?: string;
  modal?: boolean;
  mask?: string;
  placeholder?: string;
  password?: boolean;
  selectList?: { label: string; value: any }[];
  action?: {
    name: keyof typeof IconButton.glyphMap;
    onAction: () => void;
  };
}

const TextField: React.FC<PropTypes> = ({
  value,
  onValueChanged,
  label,
  error,
  modal,
  mask,
  placeholder,
  selectList,
  password,
  action,
}) => {
  const { theme, strings } = useUi();
  const [focused, setFocused] = useState(false);
  const [labelUp, setLabelUp] = useState(false);
  const [styles, setStyles] = useState(getStyles(theme));

  useEffect(() => {
    setStyles(getStyles(theme));
  }, [theme]);

  useEffect(() => {
    LayoutAnimation.linear();

    if (focused || value !== '') setLabelUp(true);
    else setLabelUp(false);
  }, [value, focused]);

  const getPlaceholder = (): string => {
    if (focused && placeholder) return placeholder;
    return label.charAt(0).toUpperCase() + label.slice(1);
  };

  const renderDropDownButton = (item: any, index: number) => {
    return (
      <DropDownLabel key={index}>{item ? item.label : label}</DropDownLabel>
    );
  };

  const getDropdownDefaultValueIndex = (): number => {
    if (!selectList) return 0;

    let result = 0;

    selectList.forEach(({ value: itemValue }, index) => {
      if (value === itemValue) result = index;
    });

    return result;
  };

  const getCorrectInput = () => {
    if (selectList)
      return (
        <SelectDropdown
          data={selectList}
          onSelect={(selectedItem) =>
            onValueChanged && onValueChanged(selectedItem.value)
          }
          buttonTextAfterSelection={(selectedItem) => selectedItem.label}
          rowTextForSelection={(item) => item.label}
          buttonStyle={styles.dropDownButton}
          renderCustomizedButtonChild={renderDropDownButton}
          search
          searchInputStyle={styles.dropDownSearchinput}
          searchInputTxtColor={theme.colors.font}
          searchPlaceHolder={strings.search}
          searchPlaceHolderColor={theme.colors.font}
          dropdownStyle={styles.dropDownStyle}
          rowTextStyle={styles.rowTextStyle}
          defaultValueByIndex={getDropdownDefaultValueIndex()}
        />
      );

    if (mask)
      return (
        <MaskedTextInput
          mask={mask}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={(text) => onValueChanged && onValueChanged(text)}
          value={value}
          placeholder={getPlaceholder()}
          placeholderTextColor={theme.colors.font}
          style={styles.maskedInput}
          keyboardType={'number-pad'}
          defaultValue={value}
        />
      );

    return (
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChangeText={onValueChanged}
        value={value}
        placeholder={getPlaceholder()}
        placeholderTextColor={theme.colors.font}
        secureTextEntry={password}
        autoComplete="off"
      />
    );
  };

  return (
    <Container modal={modal}>
      <Label focused={labelUp}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </Label>
      <BackgroundContainer modal={modal}>
        {getCorrectInput()}
        {action && (
          <IconButton
            name={action.name}
            onPress={action.onAction}
            size={32}
            style={{ marginRight: 8 }}
          />
        )}
      </BackgroundContainer>

      {error && (
        <ErrorLabel>
          {error.charAt(0).toUpperCase() + error.slice(1)}
        </ErrorLabel>
      )}
    </Container>
  );
};

const getStyles = (theme: DefaultTheme) =>
  StyleSheet.create({
    rowTextStyle: {
      color: theme.colors.font,
    },
    dropDownStyle: {
      borderRadius: 10,
      backgroundColor: theme.colors.background,
    },
    dropDownButton: {
      backgroundColor: 'transparent',
      height: 56,
      width: '100%',
      borderRadius: 6,
      margin: 0,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    dropDownText: {
      margin: 0,
      padding: 0,
      color: theme.colors.font,
    },
    dropDownSearchinput: {
      height: 56,
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: theme.colors.section,
      fontSize: 16,
      fontWeight: '400',
    },
    maskedInput: {
      height: 56,
      paddingVertical: 8,
      paddingHorizontal: 16,
      color: theme.colors.font,
      fontSize: 16,
      fontWeight: '400',
    },
  });

export default TextField;

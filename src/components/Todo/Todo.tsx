import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Tag } from '../Tag';
import styles from './Todo.styles';
import { ColorProps, TodoProps } from './types';

const { DivStyled, DivStyledContent, SectionStyled } = styles;

const colors: ColorProps[] = [
    'green',
    'grey',
    'yellow',
    'blue',
    'blueLight',
    'purple',
    'pink',
];

const Todo: React.FC<TodoProps> = ({
    buttonText = 'Add',
    fullWidth = false,
    label,
    onChange,
    pattern,
    todos = [],
    ...props
}) => {
    const key = useMemo(() => Math.random(), []);
    const [inputValue, setInputValue] = useState<string>('');
    const [isInputVlaid, setIsInputValid] = useState<boolean>(false);
    const [lists, setLists] = useState<string[]>(todos);
    useEffect(() => onChange && onChange(lists), [lists]);
    useEffect(() => setLists(todos), [todos]);
    useEffect(() => {
        const expression = new RegExp(pattern || '(.*?)');
        setIsInputValid(expression.test(inputValue));
    }, [inputValue]);

    const removeTodo = (id: number) => {
        const updatedList = lists.filter((item) => item !== lists[id]);
        setLists([...updatedList]);
    };

    const addTodo = () => {
        setLists((prevTodo) => Array.from(new Set([...prevTodo, inputValue])));
        setInputValue('');
        const input: HTMLInputElement | null = document.querySelector(
            `input[key="${key}"]`,
        );

        input?.focus();
    };

    return (
        <SectionStyled data-testid="test-todo" {...props}>
            <DivStyled>
                <Input
                    id="todo-input"
                    label={label}
                    onChange={(e) => setInputValue(e.target.value)}
                    size="large"
                    validation={{
                        regExp: pattern,
                        required: true,
                    }}
                    key={key}
                    value={inputValue}
                />

                <Button
                    disabled={!isInputVlaid}
                    icon="plus"
                    onClick={addTodo}
                    size="large"
                    text={buttonText}
                    theme="primary"
                />
            </DivStyled>

            <DivStyledContent
                data-testid="test-todo_content"
                fullWidth={fullWidth}
            >
                {lists.map((todo, i) => (
                    <Tag
                        color={i < 8 ? colors[i] : colors[i % 8]}
                        hasCancel
                        key={i}
                        onCancelClick={() => removeTodo(i)}
                        text={todo}
                        theme="chips"
                    />
                ))}
            </DivStyledContent>
        </SectionStyled>
    );
};

export default Todo;

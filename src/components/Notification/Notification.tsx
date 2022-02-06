import { NotificationProps } from './types';
import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { iconTypes, TIconType } from '../Icon/collection';
import NotificationStyles from './Notification.styles';
import color from '../../styles/colors';

const {
    TextContentStyled,
    CloseWrapperStyled,
    NotificationStyled,
    TitleStyled,
    SpanStyled,
    IconWrapperStyled,
    BarStyled,
} = NotificationStyles;

const Notification: React.FC<NotificationProps> = ({
    id,
    icon,
    message,
    title = 'New Message',
    type = 'info',
    dispatch,
}: NotificationProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
    const [barWidth, setBarWidth] = useState(0);

    const notificationWidth = 320;

    const startTimer = () => {
        const id = setInterval(() => {
            setBarWidth((prev) => {
                if (prev < notificationWidth) return prev + 1;

                clearInterval(id);
                return prev;
            });
        }, 20);

        setIntervalId(id);
    };

    const pauseTimer = () => {
        clearInterval(intervalId as NodeJS.Timeout);
    };

    useEffect(() => {
        if (barWidth === notificationWidth) closeNotification();
    }, [barWidth]);

    useEffect(() => startTimer(), []);

    const closeNotification = () => {
        pauseTimer();
        setIsClosing(true);
        setTimeout(() => {
            dispatch({
                type: 'remove_notification',
                id,
                payload: {
                    type: 'error',
                    message: undefined,
                    title: undefined,
                },
            });
        }, 300);
    };

    const getIcon = (): TIconType => {
        if (icon) return icon;
        if (type === 'error' || type === 'warning') {
            return iconTypes.exclamation;
        }
        if (type === 'info') return iconTypes.info;
        return iconTypes.checkmark;
    };

    return (
        <NotificationStyled
            data-testid={'test-notification-id'}
            id={id}
            isClosing={isClosing}
            onMouseEnter={pauseTimer}
            onMouseLeave={startTimer}
            type={type}
        >
            <IconWrapperStyled>
                <Icon size={24} svg={getIcon()} />
            </IconWrapperStyled>
            <TextContentStyled>
                <TitleStyled data-testid={'test-notification-title'}>
                    {title}
                </TitleStyled>
                <CloseWrapperStyled onClick={closeNotification}>
                    <Icon size={24} svg={iconTypes.x} fill={color.greyIcons} />
                </CloseWrapperStyled>
                <SpanStyled data-testid={'test-notification-message'}>
                    {message}
                </SpanStyled>
            </TextContentStyled>
            <BarStyled style={{ width: barWidth }} />
        </NotificationStyled>
    );
};

export default Notification;

import React, { useState } from "react";
import { Form, Popup, Icon, SemanticWIDTHS } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

/**
 * Pointing type
 */
type Pointing = "below" | "left" | "right" | "above";

/**
 * Password prop types
 */
interface PasswordProps {
    label: string
    value: string;
    error: false | { content: JSX.Element[] };
    width: SemanticWIDTHS;
    type: "password";
    placeholder: string;
    name: string;
    onBlur: (event) => void;
    onChange: (event) => void;
}
export const Password: React.FunctionComponent<PasswordProps> = (
    props: PasswordProps
): JSX.Element => {
    const [isShow, setIsShow] = useState(false);
    const { t } = useTranslation();

    return (
        <Form.Input
            label={props.label}
            value={props.value}
            error={props.error}
            type={isShow ? "text" : props.type}
            placeholder={props.placeholder}
            name={props.name}
            width={props.width}
            onBlur={props.onBlur}
            onChange={props.onChange}
            icon={
                <Popup
                    trigger={
                        <Icon
                            name={
                                !isShow ? "eye" : "eye slash"
                            }
                            disabled={!props.value}
                            link
                            onClick={() => { setIsShow(!isShow) }}
                        />
                    }
                    position="top center"
                    content={
                        !isShow
                            ? t("common:showPassword")
                            : t("common:hidePassword")
                    }
                    inverted
                />
            }
        />
    );
}
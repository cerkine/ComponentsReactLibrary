import React, { useState } from "react";
import NavList, { type NavListProps } from "./NavList";
import { Button } from "../atoms/Button/Button"; // Import your custom Button

const SideBarList = (props: Omit<NavListProps, "direction">) => {
    const [visible, setVisible] = useState(true);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minWidth: visible ? 180 : 0,
                height: "100vh",
                transition: "min-width 0.2s",
                overflow: "hidden",
                background: "#fff",
                borderRight: "1px solid #eee",
            }}
        >
            <Button
                label={visible ? "=" : "="}
                size="small"
                onClick={() => setVisible((v) => !v)}
                backgroundColor="#eaeaff"
                textColor="#131ced"
                border="none"
            />
            {visible && (
                <NavList {...props} direction="vertical" alignment="left" />
            )}
        </div>
    );
};

export default SideBarList;
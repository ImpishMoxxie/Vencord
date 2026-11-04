/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./index.css";

import { classNameFactory } from "@api/Styles";
import ErrorBoundary from "@components/ErrorBoundary";
import { RenderModalProps } from "@vencord/discord-types";
import { Modal, openModal } from "@webpack/common";

interface KeywordsModalProps {
    keywords: Record<string, string>;
    title: string;
    modalProps: RenderModalProps;
}

export function IndicatorsModal({ keywords, title, modalProps }: KeywordsModalProps) {
    const cl = classNameFactory("vc-keyword-highlighter-");

    return (
        <Modal {...modalProps} size="sm" title={title}>
            <div id={cl("modal")}>
                <div className={cl("indicator-container")}>
                    <ul className={cl("indicator-links")}>
                        {Object.entries(keywords).map(([item, tooltip]) => (
                            <li className={cl("tones-list-items")} key={item}>
                                <span className={cl("item")} style={{ fontWeight: 600 }}>{item}</span>
                                <div className={cl("item-separator")}>-</div>
                                <span>{tooltip}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Modal>
    );
}

export const openIndicatorsModal = (keywords: Record<string, string>, title: string) => openModal(modalProps => <ErrorBoundary><IndicatorsModal keywords={keywords} title={title} modalProps={modalProps} /></ErrorBoundary>);

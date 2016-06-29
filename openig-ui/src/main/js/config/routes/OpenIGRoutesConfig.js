/**
 * The contents of this file are subject to the terms of the Common Development and
 * Distribution License (the License). You may not use this file except in compliance with the
 * License.
 *
 * You can obtain a copy of the License at legal/CDDLv1.0.txt. See the License for the
 * specific language governing permission and limitations under the License.
 *
 * When distributing Covered Software, include this CDDL Header Notice in each file and include
 * the License file at legal/CDDLv1.0.txt. If applicable, add the following below the CDDL
 * Header, with the fields enclosed by brackets [] replaced by your own identifying
 * information: "Portions copyright [year] [name of copyright owner]".
 *
 * Copyright 2016 ForgeRock AS.
 */

define([],
    function () {
        return {
            "appsPage": {
                view: "org/forgerock/openig/ui/admin/apps/AppsListView",
                role: "ui-admin",
                url: "apps/"
            },
            "addAppView": {
                view: "org/forgerock/openig/ui/admin/apps/AddAppView",
                role: "ui-admin",
                url: "apps/add/"
            },
            "duplicateAppView": {
                view: "org/forgerock/openig/ui/admin/apps/AddAppView",
                role: "ui-admin",
                url: /^apps\/duplicate\/(.+?)$/,
                pattern: "apps/duplicate/?"
            },
            "editAppView": {
                view: "org/forgerock/openig/ui/admin/apps/EditAppView",
                role: "ui-admin",
                defaults: ["", ""],
                url: /^apps\/edit\/(.+?)\/(.*)$/,
                pattern: "apps/edit/?/?"
            },
            "settings": {
                view: "org/forgerock/openig/ui/admin/settings/SettingsView",
                role: "ui-admin",
                url: "settings/"
            }
        };
    });

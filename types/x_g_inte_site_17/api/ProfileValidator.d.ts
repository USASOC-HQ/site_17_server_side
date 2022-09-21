/// <reference path="../../sn_typings_server_scoped/dist/index.d.ts" />
declare namespace x_g_inte_site_17 {
    /**
     * Defines a profile field to be validated.
     * @export
     * @interface IProfileFieldDefinition
     */
    interface IProfileFieldDefinition {
        /**
         * The table column name.
         *
         * @type {string}
         * @memberof IProfileFieldDefinition
         */
        name: string;
        /**
         * The label for the field.
         *
         * @type {string}
         * @memberof IProfileFieldDefinition
         */
        label: string;
        /**
         * Adjective used for the field for failure messages.
         *
         * @type {string}
         * @memberof IProfileFieldDefinition
         */
        failAdj: string;
    }
    /**
     * Represents the results of a user lookup
     * @export
     * @interface IUserLookupResult
     */
    interface IUserLookupResult {
        /**
         * The profile compliance check result code: 0=Success; 1=User not found; 2=Unexpected exception trying to find user.
         * @type {number}
         * @memberof IUserLookupResult
         */
        code: number;
        /**
         * The sys_id of the sys_user that was found or the sys_id that was used for the user lookup.
         * @type {(string | undefined)}
         * @memberof IUserLookupResult
         */
        sys_id?: string;
        /**
         * The user_id of the sys_user that was found or the user_id that was used for the user lookup.
         * @type {(string | undefined)}
         * @memberof IUserLookupResult
         */
        user_id?: string;
        /**
         * The sys_user that was found.
         * @type {(GlideRecord | GlideElementReference | undefined)}
         * @memberof IUserLookupResult
         */
        user?: GlideRecord | GlideElementReference;
        /**
         * The user lookup failure message.
         * @type {string}
         * @memberof IUserLookupResult
         */
        message?: string;
        /**
         * Describes the fatal error.
         * @type {(any | undefined)}
         * @memberof IUserLookupResult
         */
        fault?: any;
    }
    /**
     * Represents the results of a compliance check for a profile field.
     * @export
     * @interface IComplianceCheckResult
     */
    interface IComplianceCheckResult {
        /**
         * The label for the field that was checked.
         * @type {string}
         * @memberof IComplianceCheckResult
         */
        label: string;
        /**
         * Indicates whether the compliance check passed.
         * @type {boolean}
         * @memberof IComplianceCheckResult
         */
        passed: boolean;
        /**
         * The field access failure message.
         * @type {string}
         * @memberof IComplianceCheckResult
         */
        message?: string;
        /**
         * Describes the fatal error.
         * @type {(any | undefined)}
         * @memberof IComplianceCheckResult
         */
        fault?: any;
    }
    /**
     * User compliance check information.
     * @interface IUserProfileComplianceInfo
     */
    interface IUserProfileComplianceInfo {
        /**
         * The number of compliance checks not evaluated due to fatal exception.
         * @type {number}
         * @memberof IUserProfileComplianceInfo
         */
        notChecked: number;
        /**
         * The number of evaluated compliance checks that passed.
         * @type {number}
         * @memberof IUserProfileComplianceInfo
         */
        passed: number;
        /**
         * The number of evaluated compliance checks that failed.
         * @type {number}
         * @memberof IUserProfileComplianceInfo
         */
        failed: number;
        /**
         * Compliance check results by name.
         * @type {(Record<string, IComplianceCheckResult> | undefined)}
         * @memberof IUserProfileComplianceInfo
         */
        results?: Record<string, IComplianceCheckResult>;
        /**
         * Compliance check result message.
         * @type {string}
         * @memberof IUserProfileComplianceInfo
         */
        message: string;
        /**
         * Describes the fatal error.
         * @type {(any | undefined)}
         * @memberof IUserProfileComplianceInfo
         */
        fault?: any;
    }
    /**
     * Represents the results of a profile compliance check.
     * @export
     * @interface IUserProfileComplianceResult
     * @extends {IUserProfileComplianceInfo}
     */
    interface IUserProfileComplianceResult extends IUserProfileComplianceInfo {
        /**
         * The profile compliance check result code: 0=Success; 1=User not found; 2=Unexpected exception trying to find user.
         * @type {number}
         * @memberof IUserProfileComplianceResult
         */
        code: number;
        /**
         * The sys_id of the sys_user that was found or the sys_id that was used for the user lookup.
         * @type {(string | undefined)}
         * @memberof IUserProfileComplianceResult
         */
        sys_id?: string;
        /**
         * The user_id of the sys_user that was found or the user_id that was used for the user lookup.
         * @type {(string | undefined)}
         * @memberof IUserProfileComplianceResult
         */
        user_id?: string;
    }
    interface IUserNotificationsResult {
        /**
         * The profile compliance check result code: 0=Success; 1=User not found; 2=Unexpected exception trying to find user.
         * @type {number}
         * @memberof IUserNotificationsResult
         */
        code: number;
        /**
         * The sys_id of the sys_user that was found or the sys_id that was used for the user lookup.
         * @type {(string | undefined)}
         * @memberof IUserNotificationsResult
         */
        sys_id?: string;
        /**
         * The user_id of the sys_user that was found or the user_id that was used for the user lookup.
         * @type {(string | undefined)}
         * @memberof IUserNotificationsResult
         */
        user_id?: string;
        /**
         * Profile compliance check information.
         * @type {IUserProfileComplianceInfo}
         * @memberof IUserNotificationsResult
         */
        profileCompliance: IUserProfileComplianceInfo;
    }
    interface IPhoneAndOrg {
        /**
         * Name of a user's organization.
         * @type {string}
         * @memberof IPhoneAndOrg
         */
        org: string;
        /**
         * User's primary phone number
         * @type {string}
         * @memberof IPhoneAndOrg
         */
        phone: string;
    }
    interface IProfileValidator extends $$snClass.ICustomClassBase<IProfileValidator, "ProfileValidator"> {
        /**
         * Gets compliance check information for the user indicated by the 'sysparm_user_id' parameter.
         * @returns {(string | undefined)} A JSON string containing an {@link IUserProfileComplianceResult} object that describes the result of the compliance check.
         * @memberof IProfileValidator
         */
        getUserProfileCompliance(): string | undefined;
        /**
         * Gets compliance check notifications for the user indicated by the 'sysparm_user_id' parameter.
         * @returns {(string | undefined)} A JSON string containing an {@link IUserNotificationsResult} object that contains the compliance notification information.
         * @memberof IProfileValidator
         */
        getUserNotifications(): string | undefined;
        /**
         * Gets the primary phone number and organization entity for the user indicated by the 'sysparm_user_id' parameter.
         * @description The 'result' element contains an attribute named 'org' which contains the organization name, as well as an attribute named 'phone' which contains the primary phone number.
         * @memberof IProfileValidator
         */
        getUserPhoneAndOrg(): void;
        /**
         * Gets the primary phone number for theuser indicated by the 'sysparm_user_id' parameter.
         * @return {string} The primary phone number for the specified user or an empty string if the user does not exist or no phone number was found.
         * @memberof IProfileValidator
         */
        getUserPhone(): string;
        /**
         * Gets the primary phone number for the user indicated by the 'sysparm_user_id' parameter.
         * @return {string} The organization name for the specified user or an empty string if the user does not exist or no related organization was found.
         * @memberof IProfileValidator
         */
        getUserOrg(): string;
    }
    interface IProfileValidatorPrototype extends $$snClass.ICustomAjaxClassPrototype<IProfileValidator, IProfileValidatorPrototype, "ProfileValidator">, IProfileValidator {
    }
    type ProfileValidator = Readonly<IProfileValidator>;
    interface ProfileValidatorConstructor extends $$snClass.CustomAjaxClassConstructor<IProfileValidator, IProfileValidatorPrototype, ProfileValidator> {
        new (request?: GlideServletRequest, responseXML?: XMLDocument2, gc?: GlideController): ProfileValidator;
        (request?: GlideServletRequest, responseXML?: XMLDocument2, gc?: GlideController): ProfileValidator;
        /**
         * Indicates whether the user lookup result represents a fatal error.
         * @param {IUserLookupResult} result The user lookup result object
         * @returns {boolean} true if the user lookup result indicates a fatal error; otherwise, false.
         * @memberof ProfileValidatorConstructor
         */
        isUserLookupFault(result: IUserLookupResult): boolean;
        /**
         * Attempts to get a related user or look up a user.
         * @param {(GlideRecord | GlideElementReference | string)} user - The object referring to a user, a sys_id for a user or a user name (user_id).
         * @returns {IUserLookupResult} An object that represents the result of detecting the associated user or looking up the user.
         * @memberof ProfileValidatorConstructor
         */
        getUserLookupResult(user: GlideRecord | GlideElementReference | string): IUserLookupResult;
        /**
         * Does a compliance check for the specified sys_user.
         * @param {(GlideRecord | GlideElementReference)} sys_user - The user to validate.
         * @returns {IUserProfileComplianceInfo} An object that describes the compliance check result.
         * @memberof ProfileValidatorConstructor
         */
        checkUserProfileCompliance(sys_user: GlideRecord | GlideElementReference): IUserProfileComplianceInfo;
        /**
         * Gets compliance check information for the specified user.
         * @param {(GlideRecord | GlideElementReference | string)} user - The object referring to a user, a sys_id for a user or a user name (user_id).
         * @returns {IUserProfileComplianceResult} An object that describes the result of the compliance check.
         * @memberof ProfileValidatorConstructor
         */
        getUserProfileCompliance(user: GlideRecord | GlideElementReference | string): IUserProfileComplianceResult;
        /**
         * Gets compliance check notifications for the specified user.
         * @param {(GlideRecord | GlideElementReference | string)} user - The object referring to a user, a sys_id for a user or a user name (user_id).
         * @returns {IUserNotificationsResult} An object that contains the compliance notification information.
         * @memberof ProfileValidatorConstructor
         */
        getUserNotifications(user: GlideRecord | GlideElementReference | string): IUserNotificationsResult;
        /**
         * Gets the names of the fields for the user profile that may contain phone numbers.
         * @return {string[]} The names of the fields for the user profile that may contain phone numbers.
         * @memberof ProfileValidatorConstructor
         */
        getProfilePhoneFields(): string[];
        /**
         * Gets the names of the profile fields to be validated.
         * @return {string[]} The names of the profile fields to be validated.
         * @memberof ProfileValidatorConstructor
         */
        getProfileComplianceCheckFields(): string[];
        /**
         * Gets the primary phone number and organization entity for the specified user.
         * @param {(string | sys_userGlideRecord | sys_userElement)} [user] - The user record or Sys ID of the a user profile.
         * @return {(IPhoneAndOrg | undefined)} The primary phone number and organization entity for the specified user or undefined if the user does not exist.
         * @memberof ProfileValidatorConstructor
         */
        getUserPhoneAndOrg(user?: string | sys_userGlideRecord | sys_userElement): IPhoneAndOrg | undefined;
        /**
         * Gets the primary phone number for the specified user.
         * @param {(string | sys_userGlideRecord | sys_userElement)} [user] - The user record or Sys ID of the a user profile.
         * @return {(string | undefined)} The primary phone number for the specified user or undefined if the user does not exist or no phone number was found.
         * @memberof ProfileValidatorConstructor
         */
        getUserPhone(user?: string | sys_userGlideRecord | sys_userElement): string | undefined;
        /**
         * Gets the organization name for the specified user.
         * @param {(string | sys_userGlideRecord | sys_userElement)} [user] - The user record or Sys ID of the a user profile.
         * @return {(string | undefined)} The organization name for the specified user or undefined if the user does not exist or no related organization was found.
         * @memberof ProfileValidatorConstructor
         */
        getUserOrg(user?: string | sys_userGlideRecord | sys_userElement): string | undefined;
    }
    const ProfileValidator: ProfileValidatorConstructor;
}

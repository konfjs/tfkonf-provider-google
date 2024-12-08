import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApikeysKeyArgsRestrictionsAndroidKeyRestrictionsAllowedApplications {
  package_name: string;
  sha1_fingerprint: string;
}

export interface GoogleApikeysKeyArgsRestrictionsAndroidKeyRestrictions {
  allowed_applications: GoogleApikeysKeyArgsRestrictionsAndroidKeyRestrictionsAllowedApplications[];
}

export interface GoogleApikeysKeyArgsRestrictionsApiTargets {
  methods?: string[];
  service: string;
}

export interface GoogleApikeysKeyArgsRestrictionsBrowserKeyRestrictions {
  allowed_referrers: string[];
}

export interface GoogleApikeysKeyArgsRestrictionsIosKeyRestrictions {
  allowed_bundle_ids: string[];
}

export interface GoogleApikeysKeyArgsRestrictionsServerKeyRestrictions {
  allowed_ips: string[];
}

export interface GoogleApikeysKeyArgsRestrictions {
  android_key_restrictions?: GoogleApikeysKeyArgsRestrictionsAndroidKeyRestrictions;
  api_targets?: GoogleApikeysKeyArgsRestrictionsApiTargets[];
  browser_key_restrictions?: GoogleApikeysKeyArgsRestrictionsBrowserKeyRestrictions;
  ios_key_restrictions?: GoogleApikeysKeyArgsRestrictionsIosKeyRestrictions;
  server_key_restrictions?: GoogleApikeysKeyArgsRestrictionsServerKeyRestrictions;
}

export interface GoogleApikeysKeyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApikeysKeyArgs {
  display_name?: string;
  name: string;
  restrictions?: GoogleApikeysKeyArgsRestrictions;
  timeouts?: GoogleApikeysKeyArgsTimeouts;
}

export class google_apikeys_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApikeysKeyArgs) {
    const meta = {restrictions:{isBlock:true,android_key_restrictions:{isBlock:true,allowed_applications:{isBlock:true}},api_targets:{isBlock:true},browser_key_restrictions:{isBlock:true},ios_key_restrictions:{isBlock:true},server_key_restrictions:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apikeys_key", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_string(): string {
    return `${this.resourceType}.${this.resourceName}.key_string`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }
}

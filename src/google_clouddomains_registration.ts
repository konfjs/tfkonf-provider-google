import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleClouddomainsRegistrationArgsContactSettingsAdminContactPostalAddress {
  address_lines?: string[];
  administrative_area?: string;
  locality?: string;
  organization?: string;
  postal_code?: string;
  recipients?: string[];
  region_code: string;
}

export interface GoogleClouddomainsRegistrationArgsContactSettingsAdminContact {
  email: string;
  fax_number?: string;
  phone_number: string;
  postal_address: GoogleClouddomainsRegistrationArgsContactSettingsAdminContactPostalAddress;
}

export interface GoogleClouddomainsRegistrationArgsContactSettingsRegistrantContactPostalAddress {
  address_lines?: string[];
  administrative_area?: string;
  locality?: string;
  organization?: string;
  postal_code?: string;
  recipients?: string[];
  region_code: string;
}

export interface GoogleClouddomainsRegistrationArgsContactSettingsRegistrantContact {
  email: string;
  fax_number?: string;
  phone_number: string;
  postal_address: GoogleClouddomainsRegistrationArgsContactSettingsRegistrantContactPostalAddress;
}

export interface GoogleClouddomainsRegistrationArgsContactSettingsTechnicalContactPostalAddress {
  address_lines?: string[];
  administrative_area?: string;
  locality?: string;
  organization?: string;
  postal_code?: string;
  recipients?: string[];
  region_code: string;
}

export interface GoogleClouddomainsRegistrationArgsContactSettingsTechnicalContact {
  email: string;
  fax_number?: string;
  phone_number: string;
  postal_address: GoogleClouddomainsRegistrationArgsContactSettingsTechnicalContactPostalAddress;
}

export interface GoogleClouddomainsRegistrationArgsContactSettings {
  privacy: string;
  admin_contact: GoogleClouddomainsRegistrationArgsContactSettingsAdminContact;
  registrant_contact: GoogleClouddomainsRegistrationArgsContactSettingsRegistrantContact;
  technical_contact: GoogleClouddomainsRegistrationArgsContactSettingsTechnicalContact;
}

export interface GoogleClouddomainsRegistrationArgsDnsSettingsCustomDnsDsRecords {
  algorithm?: string;
  digest?: string;
  digest_type?: string;
  key_tag?: number;
}

export interface GoogleClouddomainsRegistrationArgsDnsSettingsCustomDns {
  name_servers: string[];
  ds_records?: GoogleClouddomainsRegistrationArgsDnsSettingsCustomDnsDsRecords[];
}

export interface GoogleClouddomainsRegistrationArgsDnsSettingsGlueRecords {
  host_name: string;
  ipv4_addresses?: string[];
  ipv6_addresses?: string[];
}

export interface GoogleClouddomainsRegistrationArgsDnsSettings {
  custom_dns?: GoogleClouddomainsRegistrationArgsDnsSettingsCustomDns;
  glue_records?: GoogleClouddomainsRegistrationArgsDnsSettingsGlueRecords[];
}

export interface GoogleClouddomainsRegistrationArgsManagementSettings {
}

export interface GoogleClouddomainsRegistrationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleClouddomainsRegistrationArgsYearlyPrice {
  currency_code?: string;
  units?: string;
}

export interface GoogleClouddomainsRegistrationArgs {
  contact_notices?: string[];
  domain_name: string;
  domain_notices?: string[];
  labels?: { [key: string]: string };
  location: string;
  contact_settings: GoogleClouddomainsRegistrationArgsContactSettings;
  dns_settings?: GoogleClouddomainsRegistrationArgsDnsSettings;
  management_settings?: GoogleClouddomainsRegistrationArgsManagementSettings;
  timeouts?: GoogleClouddomainsRegistrationArgsTimeouts;
  yearly_price: GoogleClouddomainsRegistrationArgsYearlyPrice;
}

export class google_clouddomains_registration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleClouddomainsRegistrationArgs) {
    const meta = {contact_settings:{isBlock:true,admin_contact:{isBlock:true,postal_address:{isBlock:true}},registrant_contact:{isBlock:true,postal_address:{isBlock:true}},technical_contact:{isBlock:true,postal_address:{isBlock:true}}},dns_settings:{isBlock:true,custom_dns:{isBlock:true,ds_records:{isBlock:true}},glue_records:{isBlock:true}},management_settings:{isBlock:true},timeouts:{isBlock:true},yearly_price:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_clouddomains_registration", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get expire_time(): string {
    return `${this.resourceType}.${this.resourceName}.expire_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get issues(): string {
    return `${this.resourceType}.${this.resourceName}.issues`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get register_failure_reason(): string {
    return `${this.resourceType}.${this.resourceName}.register_failure_reason`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get supported_privacy(): string {
    return `${this.resourceType}.${this.resourceName}.supported_privacy`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}

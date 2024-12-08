import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLookerInstanceArgsAdminSettings {
  allowed_email_domains?: string[];
}

export interface GoogleLookerInstanceArgsCustomDomain {
  domain?: string;
}

export interface GoogleLookerInstanceArgsDenyMaintenancePeriodEndDate {
  day?: number;
  month?: number;
  year?: number;
}

export interface GoogleLookerInstanceArgsDenyMaintenancePeriodStartDate {
  day?: number;
  month?: number;
  year?: number;
}

export interface GoogleLookerInstanceArgsDenyMaintenancePeriodTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}

export interface GoogleLookerInstanceArgsDenyMaintenancePeriod {
  end_date: GoogleLookerInstanceArgsDenyMaintenancePeriodEndDate;
  start_date: GoogleLookerInstanceArgsDenyMaintenancePeriodStartDate;
  time: GoogleLookerInstanceArgsDenyMaintenancePeriodTime;
}

export interface GoogleLookerInstanceArgsEncryptionConfig {
  kms_key_name?: string;
}

export interface GoogleLookerInstanceArgsMaintenanceWindowStartTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}

export interface GoogleLookerInstanceArgsMaintenanceWindow {
  day_of_week: string;
  start_time: GoogleLookerInstanceArgsMaintenanceWindowStartTime;
}

export interface GoogleLookerInstanceArgsOauthConfig {
  client_id: string;
  client_secret: string;
}

export interface GoogleLookerInstanceArgsPscConfigServiceAttachments {
  local_fqdn?: string;
  target_service_attachment_uri?: string;
}

export interface GoogleLookerInstanceArgsPscConfig {
  allowed_vpcs?: string[];
  service_attachments?: GoogleLookerInstanceArgsPscConfigServiceAttachments[];
}

export interface GoogleLookerInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleLookerInstanceArgsUserMetadata {
  additional_developer_user_count?: number;
  additional_standard_user_count?: number;
  additional_viewer_user_count?: number;
}

export interface GoogleLookerInstanceArgs {
  consumer_network?: string;
  deletion_policy?: string;
  fips_enabled?: boolean;
  name: string;
  platform_edition?: string;
  private_ip_enabled?: boolean;
  psc_enabled?: boolean;
  public_ip_enabled?: boolean;
  reserved_range?: string;
  admin_settings?: GoogleLookerInstanceArgsAdminSettings;
  custom_domain?: GoogleLookerInstanceArgsCustomDomain;
  deny_maintenance_period?: GoogleLookerInstanceArgsDenyMaintenancePeriod;
  encryption_config?: GoogleLookerInstanceArgsEncryptionConfig;
  maintenance_window?: GoogleLookerInstanceArgsMaintenanceWindow;
  oauth_config: GoogleLookerInstanceArgsOauthConfig;
  psc_config?: GoogleLookerInstanceArgsPscConfig;
  timeouts?: GoogleLookerInstanceArgsTimeouts;
  user_metadata?: GoogleLookerInstanceArgsUserMetadata;
}

export class google_looker_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleLookerInstanceArgs) {
    const meta = {admin_settings:{isBlock:true},custom_domain:{isBlock:true},deny_maintenance_period:{isBlock:true,end_date:{isBlock:true},start_date:{isBlock:true},time:{isBlock:true}},encryption_config:{isBlock:true},maintenance_window:{isBlock:true,start_time:{isBlock:true}},oauth_config:{isBlock:true},psc_config:{isBlock:true,service_attachments:{isBlock:true}},timeouts:{isBlock:true},user_metadata:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_looker_instance", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get egress_public_ip(): string {
    return `${this.resourceType}.${this.resourceName}.egress_public_ip`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ingress_private_ip(): string {
    return `${this.resourceType}.${this.resourceName}.ingress_private_ip`;
  }

  get ingress_public_ip(): string {
    return `${this.resourceType}.${this.resourceName}.ingress_public_ip`;
  }

  get looker_uri(): string {
    return `${this.resourceType}.${this.resourceName}.looker_uri`;
  }

  get looker_version(): string {
    return `${this.resourceType}.${this.resourceName}.looker_version`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}

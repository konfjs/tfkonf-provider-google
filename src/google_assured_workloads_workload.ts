import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAssuredWorkloadsWorkloadArgsKmsSettings {
  next_rotation_time: string;
  rotation_period: string;
}

export interface GoogleAssuredWorkloadsWorkloadArgsPartnerPermissions {
  assured_workloads_monitoring?: boolean;
  data_logs_viewer?: boolean;
  service_access_approver?: boolean;
}

export interface GoogleAssuredWorkloadsWorkloadArgsResourceSettings {
  display_name?: string;
  resource_id?: string;
  resource_type?: string;
}

export interface GoogleAssuredWorkloadsWorkloadArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAssuredWorkloadsWorkloadArgsWorkloadOptions {
  kaj_enrollment_type?: string;
}

export interface GoogleAssuredWorkloadsWorkloadArgs {
  billing_account?: string;
  compliance_regime: string;
  display_name: string;
  enable_sovereign_controls?: boolean;
  labels?: { [key: string]: string };
  location: string;
  organization: string;
  partner?: string;
  partner_services_billing_account?: string;
  provisioned_resources_parent?: string;
  kms_settings?: GoogleAssuredWorkloadsWorkloadArgsKmsSettings;
  partner_permissions?: GoogleAssuredWorkloadsWorkloadArgsPartnerPermissions;
  resource_settings?: GoogleAssuredWorkloadsWorkloadArgsResourceSettings[];
  timeouts?: GoogleAssuredWorkloadsWorkloadArgsTimeouts;
  workload_options?: GoogleAssuredWorkloadsWorkloadArgsWorkloadOptions;
}

export class google_assured_workloads_workload extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleAssuredWorkloadsWorkloadArgs) {
    const meta = {kms_settings:{isBlock:true},partner_permissions:{isBlock:true},resource_settings:{isBlock:true},timeouts:{isBlock:true},workload_options:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_assured_workloads_workload", resourceName);
  }

  get compliance_regime(): string {
    return `${this.resourceType}.${this.resourceName}.compliance_regime`;
  }

  get compliance_status(): string {
    return `${this.resourceType}.${this.resourceName}.compliance_status`;
  }

  get compliant_but_disallowed_services(): string {
    return `${this.resourceType}.${this.resourceName}.compliant_but_disallowed_services`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get ekm_provisioning_response(): string {
    return `${this.resourceType}.${this.resourceName}.ekm_provisioning_response`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kaj_enrollment_state(): string {
    return `${this.resourceType}.${this.resourceName}.kaj_enrollment_state`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get organization(): string {
    return `${this.resourceType}.${this.resourceName}.organization`;
  }

  get resources(): string {
    return `${this.resourceType}.${this.resourceName}.resources`;
  }

  get saa_enrollment_response(): string {
    return `${this.resourceType}.${this.resourceName}.saa_enrollment_response`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get violation_notifications_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.violation_notifications_enabled`;
  }
}

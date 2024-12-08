import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerAccessLevelConditionArgsDevicePolicyOsConstraints {
  minimum_version?: string;
  os_type: string;
}

export interface GoogleAccessContextManagerAccessLevelConditionArgsDevicePolicy {
  allowed_device_management_levels?: string[];
  allowed_encryption_statuses?: string[];
  require_admin_approval?: boolean;
  require_corp_owned?: boolean;
  require_screen_lock?: boolean;
  os_constraints?: GoogleAccessContextManagerAccessLevelConditionArgsDevicePolicyOsConstraints[];
}

export interface GoogleAccessContextManagerAccessLevelConditionArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleAccessContextManagerAccessLevelConditionArgsVpcNetworkSourcesVpcSubnetwork {
  network: string;
  vpc_ip_subnetworks?: string[];
}

export interface GoogleAccessContextManagerAccessLevelConditionArgsVpcNetworkSources {
  vpc_subnetwork?: GoogleAccessContextManagerAccessLevelConditionArgsVpcNetworkSourcesVpcSubnetwork;
}

export interface GoogleAccessContextManagerAccessLevelConditionArgs {
  access_level: string;
  ip_subnetworks?: string[];
  members?: string[];
  negate?: boolean;
  regions?: string[];
  required_access_levels?: string[];
  device_policy?: GoogleAccessContextManagerAccessLevelConditionArgsDevicePolicy;
  timeouts?: GoogleAccessContextManagerAccessLevelConditionArgsTimeouts;
  vpc_network_sources?: GoogleAccessContextManagerAccessLevelConditionArgsVpcNetworkSources[];
}

export class google_access_context_manager_access_level_condition extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAccessContextManagerAccessLevelConditionArgs) {
    const meta = {device_policy:{isBlock:true,os_constraints:{isBlock:true}},timeouts:{isBlock:true},vpc_network_sources:{isBlock:true,vpc_subnetwork:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_access_level_condition", resourceName);
  }

  get access_level(): string {
    return `${this.resourceType}.${this.resourceName}.access_level`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}

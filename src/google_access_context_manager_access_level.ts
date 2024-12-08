import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerAccessLevelArgsBasicConditionsDevicePolicyOsConstraints {
  minimum_version?: string;
  os_type: string;
  require_verified_chrome_os?: boolean;
}

export interface GoogleAccessContextManagerAccessLevelArgsBasicConditionsDevicePolicy {
  allowed_device_management_levels?: string[];
  allowed_encryption_statuses?: string[];
  require_admin_approval?: boolean;
  require_corp_owned?: boolean;
  require_screen_lock?: boolean;
  os_constraints?: GoogleAccessContextManagerAccessLevelArgsBasicConditionsDevicePolicyOsConstraints[];
}

export interface GoogleAccessContextManagerAccessLevelArgsBasicConditionsVpcNetworkSourcesVpcSubnetwork {
  network: string;
  vpc_ip_subnetworks?: string[];
}

export interface GoogleAccessContextManagerAccessLevelArgsBasicConditionsVpcNetworkSources {
  vpc_subnetwork?: GoogleAccessContextManagerAccessLevelArgsBasicConditionsVpcNetworkSourcesVpcSubnetwork;
}

export interface GoogleAccessContextManagerAccessLevelArgsBasicConditions {
  ip_subnetworks?: string[];
  members?: string[];
  negate?: boolean;
  regions?: string[];
  required_access_levels?: string[];
  device_policy?: GoogleAccessContextManagerAccessLevelArgsBasicConditionsDevicePolicy;
  vpc_network_sources?: GoogleAccessContextManagerAccessLevelArgsBasicConditionsVpcNetworkSources[];
}

export interface GoogleAccessContextManagerAccessLevelArgsBasic {
  combining_function?: string;
  conditions: GoogleAccessContextManagerAccessLevelArgsBasicConditions[];
}

export interface GoogleAccessContextManagerAccessLevelArgsCustomExpr {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleAccessContextManagerAccessLevelArgsCustom {
  expr: GoogleAccessContextManagerAccessLevelArgsCustomExpr;
}

export interface GoogleAccessContextManagerAccessLevelArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAccessContextManagerAccessLevelArgs {
  description?: string;
  name: string;
  parent: string;
  title: string;
  basic?: GoogleAccessContextManagerAccessLevelArgsBasic;
  custom?: GoogleAccessContextManagerAccessLevelArgsCustom;
  timeouts?: GoogleAccessContextManagerAccessLevelArgsTimeouts;
}

export class google_access_context_manager_access_level extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessLevelArgs) {
    const meta = {basic:{isBlock:true,conditions:{isBlock:true,device_policy:{isBlock:true,os_constraints:{isBlock:true}},vpc_network_sources:{isBlock:true,vpc_subnetwork:{isBlock:true}}}},custom:{isBlock:true,expr:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_access_level", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get title(): string {
    return `${this.resourceType}.${this.resourceName}.title`;
  }
}

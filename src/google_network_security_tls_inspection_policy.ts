import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkSecurityTlsInspectionPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkSecurityTlsInspectionPolicyArgs {
  ca_pool: string;
  custom_tls_features?: string[];
  description?: string;
  exclude_public_ca_set?: boolean;
  location?: string;
  min_tls_version?: string;
  name: string;
  tls_feature_profile?: string;
  trust_config?: string;
  timeouts?: GoogleNetworkSecurityTlsInspectionPolicyArgsTimeouts;
}

export class google_network_security_tls_inspection_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetworkSecurityTlsInspectionPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_security_tls_inspection_policy", resourceName);
  }

  get ca_pool(): string {
    return `${this.resourceType}.${this.resourceName}.ca_pool`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}

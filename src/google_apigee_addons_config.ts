import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeAddonsConfigArgsAddonsConfigAdvancedApiOpsConfig {
  enabled?: boolean;
}

export interface GoogleApigeeAddonsConfigArgsAddonsConfigApiSecurityConfig {
  enabled?: boolean;
}

export interface GoogleApigeeAddonsConfigArgsAddonsConfigConnectorsPlatformConfig {
  enabled?: boolean;
}

export interface GoogleApigeeAddonsConfigArgsAddonsConfigIntegrationConfig {
  enabled?: boolean;
}

export interface GoogleApigeeAddonsConfigArgsAddonsConfigMonetizationConfig {
  enabled?: boolean;
}

export interface GoogleApigeeAddonsConfigArgsAddonsConfig {
  advanced_api_ops_config?: GoogleApigeeAddonsConfigArgsAddonsConfigAdvancedApiOpsConfig;
  api_security_config?: GoogleApigeeAddonsConfigArgsAddonsConfigApiSecurityConfig;
  connectors_platform_config?: GoogleApigeeAddonsConfigArgsAddonsConfigConnectorsPlatformConfig;
  integration_config?: GoogleApigeeAddonsConfigArgsAddonsConfigIntegrationConfig;
  monetization_config?: GoogleApigeeAddonsConfigArgsAddonsConfigMonetizationConfig;
}

export interface GoogleApigeeAddonsConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApigeeAddonsConfigArgs {
  org: string;
  addons_config?: GoogleApigeeAddonsConfigArgsAddonsConfig;
  timeouts?: GoogleApigeeAddonsConfigArgsTimeouts;
}

export class google_apigee_addons_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeAddonsConfigArgs) {
    const meta = {addons_config:{isBlock:true,advanced_api_ops_config:{isBlock:true},api_security_config:{isBlock:true},connectors_platform_config:{isBlock:true},integration_config:{isBlock:true},monetization_config:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_addons_config", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get org(): string {
    return `${this.resourceType}.${this.resourceName}.org`;
  }
}

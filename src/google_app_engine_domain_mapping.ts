import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAppEngineDomainMappingArgsSslSettings {
  ssl_management_type: string;
}

export interface GoogleAppEngineDomainMappingArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAppEngineDomainMappingArgs {
  domain_name: string;
  override_strategy?: string;
  ssl_settings?: GoogleAppEngineDomainMappingArgsSslSettings;
  timeouts?: GoogleAppEngineDomainMappingArgsTimeouts;
}

export class google_app_engine_domain_mapping extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAppEngineDomainMappingArgs) {
    const meta = {ssl_settings:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_app_engine_domain_mapping", resourceName);
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
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

  get resource_records(): string {
    return `${this.resourceType}.${this.resourceName}.resource_records`;
  }
}

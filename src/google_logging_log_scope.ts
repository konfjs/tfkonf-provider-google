import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingLogScopeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleLoggingLogScopeArgs {
  description?: string;
  name: string;
  resource_names: string[];
  timeouts?: GoogleLoggingLogScopeArgsTimeouts;
}

export class google_logging_log_scope extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleLoggingLogScopeArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_log_scope", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get resource_names(): string {
    return `${this.resourceType}.${this.resourceName}.resource_names`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}

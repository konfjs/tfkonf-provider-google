import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDialogflowCxEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDialogflowCxEnvironmentArgsVersionConfigs {
  version: string;
}

export interface GoogleDialogflowCxEnvironmentArgs {
  description?: string;
  display_name: string;
  parent?: string;
  timeouts?: GoogleDialogflowCxEnvironmentArgsTimeouts;
  version_configs: GoogleDialogflowCxEnvironmentArgsVersionConfigs[];
}

export class google_dialogflow_cx_environment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDialogflowCxEnvironmentArgs) {
    const meta = {timeouts:{isBlock:true},version_configs:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dialogflow_cx_environment", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}

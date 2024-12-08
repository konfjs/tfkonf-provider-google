import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMlEngineModelArgsDefaultVersion {
  name: string;
}

export interface GoogleMlEngineModelArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleMlEngineModelArgs {
  description?: string;
  labels?: { [key: string]: string };
  name: string;
  online_prediction_console_logging?: boolean;
  online_prediction_logging?: boolean;
  regions?: string[];
  default_version?: GoogleMlEngineModelArgsDefaultVersion;
  timeouts?: GoogleMlEngineModelArgsTimeouts;
}

export class google_ml_engine_model extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleMlEngineModelArgs) {
    const meta = {default_version:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_ml_engine_model", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}

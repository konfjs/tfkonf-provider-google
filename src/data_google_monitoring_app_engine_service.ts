import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleMonitoringAppEngineServiceArgs {
  module_id: string;
  project?: string;
}

export class data_google_monitoring_app_engine_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleMonitoringAppEngineServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_monitoring_app_engine_service", resourceName);
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get module_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.module_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get service_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_id`;
  }

  get telemetry(): string {
    return `data.${this.resourceType}.${this.resourceName}.telemetry`;
  }

  get user_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_labels`;
  }
}

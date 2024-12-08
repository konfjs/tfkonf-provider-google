import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMonitoringServiceArgsBasicService {
  service_labels?: { [key: string]: string };
  service_type?: string;
}

export interface GoogleMonitoringServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleMonitoringServiceArgs {
  display_name?: string;
  service_id: string;
  user_labels?: { [key: string]: string };
  basic_service?: GoogleMonitoringServiceArgsBasicService;
  timeouts?: GoogleMonitoringServiceArgsTimeouts;
}

export class google_monitoring_service extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleMonitoringServiceArgs) {
    const meta = {basic_service:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_monitoring_service", resourceName);
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

  get service_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_id`;
  }

  get telemetry(): string {
    return `${this.resourceType}.${this.resourceName}.telemetry`;
  }
}

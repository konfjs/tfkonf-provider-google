import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleMonitoringClusterIstioServiceArgs {
  cluster_name: string;
  location: string;
  project?: string;
  service_name: string;
  service_namespace: string;
}

export class data_google_monitoring_cluster_istio_service extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleMonitoringClusterIstioServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_monitoring_cluster_istio_service", resourceName);
  }

  get cluster_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get service_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_id`;
  }

  get service_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_name`;
  }

  get service_namespace(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_namespace`;
  }

  get telemetry(): string {
    return `data.${this.resourceType}.${this.resourceName}.telemetry`;
  }

  get user_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_labels`;
  }
}

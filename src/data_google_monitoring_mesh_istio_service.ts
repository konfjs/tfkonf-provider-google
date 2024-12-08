import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleMonitoringMeshIstioServiceArgs {
  mesh_uid: string;
  project?: string;
  service_name: string;
  service_namespace: string;
}

export class data_google_monitoring_mesh_istio_service extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleMonitoringMeshIstioServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_monitoring_mesh_istio_service", resourceName);
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get mesh_uid(): string {
    return `data.${this.resourceType}.${this.resourceName}.mesh_uid`;
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

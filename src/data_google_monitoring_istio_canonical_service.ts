import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleMonitoringIstioCanonicalServiceArgs {
  canonical_service: string;
  canonical_service_namespace: string;
  mesh_uid: string;
  project?: string;
}

export class data_google_monitoring_istio_canonical_service extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleMonitoringIstioCanonicalServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_monitoring_istio_canonical_service", resourceName);
  }

  get canonical_service(): string {
    return `data.${this.resourceType}.${this.resourceName}.canonical_service`;
  }

  get canonical_service_namespace(): string {
    return `data.${this.resourceType}.${this.resourceName}.canonical_service_namespace`;
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

  get telemetry(): string {
    return `data.${this.resourceType}.${this.resourceName}.telemetry`;
  }

  get user_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_labels`;
  }
}

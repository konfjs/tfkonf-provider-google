import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeRegionNetworkEndpointGroupArgs {
  name?: string;
  project?: string;
  region?: string;
  self_link?: string;
}

export class data_google_compute_region_network_endpoint_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeRegionNetworkEndpointGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_region_network_endpoint_group", resourceName);
  }

  get app_engine(): string {
    return `data.${this.resourceType}.${this.resourceName}.app_engine`;
  }

  get cloud_function(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloud_function`;
  }

  get cloud_run(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloud_run`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get network_endpoint_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_endpoint_type`;
  }

  get psc_target_service(): string {
    return `data.${this.resourceType}.${this.resourceName}.psc_target_service`;
  }

  get subnetwork(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnetwork`;
  }
}

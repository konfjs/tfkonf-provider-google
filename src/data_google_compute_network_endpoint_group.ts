import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeNetworkEndpointGroupArgs {
  name?: string;
  project?: string;
  self_link?: string;
  zone?: string;
}

export class data_google_compute_network_endpoint_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeNetworkEndpointGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_network_endpoint_group", resourceName);
  }

  get default_port(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_port`;
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

  get size(): string {
    return `data.${this.resourceType}.${this.resourceName}.size`;
  }

  get subnetwork(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnetwork`;
  }
}

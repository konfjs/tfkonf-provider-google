import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeRouterArgs {
  name: string;
  network: string;
  project?: string;
  region?: string;
}

export class data_google_compute_router extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeRouterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_router", resourceName);
  }

  get bgp(): string {
    return `data.${this.resourceType}.${this.resourceName}.bgp`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get encrypted_interconnect_router(): string {
    return `data.${this.resourceType}.${this.resourceName}.encrypted_interconnect_router`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }
}

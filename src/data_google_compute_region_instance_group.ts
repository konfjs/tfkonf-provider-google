import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeRegionInstanceGroupArgs {
}

export class data_google_compute_region_instance_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeRegionInstanceGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_region_instance_group", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instances(): string {
    return `data.${this.resourceType}.${this.resourceName}.instances`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get size(): string {
    return `data.${this.resourceType}.${this.resourceName}.size`;
  }
}

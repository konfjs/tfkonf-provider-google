import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeInstanceGroupArgs {
  name?: string;
}

export class data_google_compute_instance_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeInstanceGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_instance_group", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instances(): string {
    return `data.${this.resourceType}.${this.resourceName}.instances`;
  }

  get named_port(): string {
    return `data.${this.resourceType}.${this.resourceName}.named_port`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get size(): string {
    return `data.${this.resourceType}.${this.resourceName}.size`;
  }

  get zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone`;
  }
}

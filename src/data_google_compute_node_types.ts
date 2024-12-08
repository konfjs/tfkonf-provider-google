import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeNodeTypesArgs {
}

export class data_google_compute_node_types extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeNodeTypesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_node_types", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone`;
  }
}

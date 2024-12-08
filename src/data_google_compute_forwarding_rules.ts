import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeForwardingRulesArgs {
  project?: string;
  region?: string;
}

export class data_google_compute_forwarding_rules extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeForwardingRulesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_forwarding_rules", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get rules(): string {
    return `data.${this.resourceType}.${this.resourceName}.rules`;
  }
}

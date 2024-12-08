import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleBigtableInstanceIamPolicyArgs {
  instance: string;
}

export class data_google_bigtable_instance_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleBigtableInstanceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_bigtable_instance_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}

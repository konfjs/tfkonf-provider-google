import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeDiskIamPolicyArgs {
  name: string;
}

export class data_google_compute_disk_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeDiskIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_disk_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone`;
  }
}

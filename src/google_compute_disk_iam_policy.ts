import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeDiskIamPolicyArgs {
  name: string;
  policy_data: string;
}

export class google_compute_disk_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeDiskIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_compute_disk_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}

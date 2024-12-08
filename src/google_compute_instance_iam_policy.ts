import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeInstanceIamPolicyArgs {
  instance_name: string;
  policy_data: string;
}

export class google_compute_instance_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeInstanceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_compute_instance_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_name(): string {
    return `${this.resourceType}.${this.resourceName}.instance_name`;
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

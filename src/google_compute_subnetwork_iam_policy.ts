import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSubnetworkIamPolicyArgs {
  policy_data: string;
  subnetwork: string;
}

export class google_compute_subnetwork_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeSubnetworkIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_compute_subnetwork_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get subnetwork(): string {
    return `${this.resourceType}.${this.resourceName}.subnetwork`;
  }
}

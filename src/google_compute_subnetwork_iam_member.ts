import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSubnetworkIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleComputeSubnetworkIamMemberArgs {
  member: string;
  role: string;
  subnetwork: string;
  condition?: GoogleComputeSubnetworkIamMemberArgsCondition;
}

export class google_compute_subnetwork_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeSubnetworkIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_subnetwork_iam_member", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get subnetwork(): string {
    return `${this.resourceType}.${this.resourceName}.subnetwork`;
  }
}

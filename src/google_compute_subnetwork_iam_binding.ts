import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSubnetworkIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleComputeSubnetworkIamBindingArgs {
  members: string[];
  role: string;
  subnetwork: string;
  condition?: GoogleComputeSubnetworkIamBindingArgsCondition;
}

export class google_compute_subnetwork_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeSubnetworkIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_subnetwork_iam_binding", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
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

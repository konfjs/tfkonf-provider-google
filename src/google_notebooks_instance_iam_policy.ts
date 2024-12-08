import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNotebooksInstanceIamPolicyArgs {
  instance_name: string;
  policy_data: string;
}

export class google_notebooks_instance_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNotebooksInstanceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_notebooks_instance_iam_policy", resourceName);
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

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}

import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNotebooksRuntimeIamPolicyArgs {
  policy_data: string;
  runtime_name: string;
}

export class google_notebooks_runtime_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNotebooksRuntimeIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_notebooks_runtime_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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

  get runtime_name(): string {
    return `${this.resourceType}.${this.resourceName}.runtime_name`;
  }
}

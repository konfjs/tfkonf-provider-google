import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleNotebooksInstanceIamPolicyArgs {
  instance_name: string;
}

export class data_google_notebooks_instance_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleNotebooksInstanceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_notebooks_instance_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_name`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}

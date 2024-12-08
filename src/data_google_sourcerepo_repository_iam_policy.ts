import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSourcerepoRepositoryIamPolicyArgs {
  repository: string;
}

export class data_google_sourcerepo_repository_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleSourcerepoRepositoryIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_sourcerepo_repository_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get repository(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository`;
  }
}

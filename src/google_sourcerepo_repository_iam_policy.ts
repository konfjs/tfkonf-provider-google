import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSourcerepoRepositoryIamPolicyArgs {
  policy_data: string;
  repository: string;
}

export class google_sourcerepo_repository_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSourcerepoRepositoryIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_sourcerepo_repository_iam_policy", resourceName);
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

  get repository(): string {
    return `${this.resourceType}.${this.resourceName}.repository`;
  }
}

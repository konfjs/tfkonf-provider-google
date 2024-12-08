import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSourcerepoRepositoryIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSourcerepoRepositoryIamMemberArgs {
  member: string;
  repository: string;
  role: string;
  condition?: GoogleSourcerepoRepositoryIamMemberArgsCondition;
}

export class google_sourcerepo_repository_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSourcerepoRepositoryIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_sourcerepo_repository_iam_member", resourceName);
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

  get repository(): string {
    return `${this.resourceType}.${this.resourceName}.repository`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}

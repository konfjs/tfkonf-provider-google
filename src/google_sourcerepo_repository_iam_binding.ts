import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSourcerepoRepositoryIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSourcerepoRepositoryIamBindingArgs {
  members: string[];
  repository: string;
  role: string;
  condition?: GoogleSourcerepoRepositoryIamBindingArgsCondition;
}

export class google_sourcerepo_repository_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSourcerepoRepositoryIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_sourcerepo_repository_iam_binding", resourceName);
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

  get repository(): string {
    return `${this.resourceType}.${this.resourceName}.repository`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}

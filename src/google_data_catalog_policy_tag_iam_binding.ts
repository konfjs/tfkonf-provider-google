import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogPolicyTagIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataCatalogPolicyTagIamBindingArgs {
  members: string[];
  policy_tag: string;
  role: string;
  condition?: GoogleDataCatalogPolicyTagIamBindingArgsCondition;
}

export class google_data_catalog_policy_tag_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataCatalogPolicyTagIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_policy_tag_iam_binding", resourceName);
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

  get policy_tag(): string {
    return `${this.resourceType}.${this.resourceName}.policy_tag`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}

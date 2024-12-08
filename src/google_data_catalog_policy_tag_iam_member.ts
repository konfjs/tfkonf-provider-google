import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogPolicyTagIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataCatalogPolicyTagIamMemberArgs {
  member: string;
  policy_tag: string;
  role: string;
  condition?: GoogleDataCatalogPolicyTagIamMemberArgsCondition;
}

export class google_data_catalog_policy_tag_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataCatalogPolicyTagIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_policy_tag_iam_member", resourceName);
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

  get policy_tag(): string {
    return `${this.resourceType}.${this.resourceName}.policy_tag`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}

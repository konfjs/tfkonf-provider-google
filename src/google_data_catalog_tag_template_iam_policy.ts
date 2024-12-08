import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogTagTemplateIamPolicyArgs {
  policy_data: string;
  tag_template: string;
}

export class google_data_catalog_tag_template_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataCatalogTagTemplateIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_tag_template_iam_policy", resourceName);
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

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get tag_template(): string {
    return `${this.resourceType}.${this.resourceName}.tag_template`;
  }
}

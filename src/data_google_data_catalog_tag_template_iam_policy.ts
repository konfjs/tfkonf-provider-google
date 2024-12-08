import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDataCatalogTagTemplateIamPolicyArgs {
  tag_template: string;
}

export class data_google_data_catalog_tag_template_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleDataCatalogTagTemplateIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_data_catalog_tag_template_iam_policy", resourceName);
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

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get tag_template(): string {
    return `data.${this.resourceType}.${this.resourceName}.tag_template`;
  }
}

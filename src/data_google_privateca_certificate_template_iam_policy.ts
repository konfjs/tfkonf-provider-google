import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGooglePrivatecaCertificateTemplateIamPolicyArgs {
  certificate_template: string;
}

export class data_google_privateca_certificate_template_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGooglePrivatecaCertificateTemplateIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_privateca_certificate_template_iam_policy", resourceName);
  }

  get certificate_template(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_template`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
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

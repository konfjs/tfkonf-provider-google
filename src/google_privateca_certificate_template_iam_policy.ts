import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePrivatecaCertificateTemplateIamPolicyArgs {
  certificate_template: string;
  policy_data: string;
}

export class google_privateca_certificate_template_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GooglePrivatecaCertificateTemplateIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_privateca_certificate_template_iam_policy", resourceName);
  }

  get certificate_template(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_template`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}